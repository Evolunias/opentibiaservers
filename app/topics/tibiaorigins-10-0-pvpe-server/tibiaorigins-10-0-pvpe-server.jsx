import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-pvpe-server');
}

export default function Tibiaorigins100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-pvpe-server" />;
}
