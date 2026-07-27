import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-pvpe-server');
}

export default function Tibiascape12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-pvpe-server" />;
}
