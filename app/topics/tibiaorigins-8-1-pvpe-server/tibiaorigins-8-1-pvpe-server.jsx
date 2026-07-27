import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-pvpe-server');
}

export default function Tibiaorigins81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-pvpe-server" />;
}
