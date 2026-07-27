import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-pvpe-server');
}

export default function Tibiaorigins71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-pvpe-server" />;
}
