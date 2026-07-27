import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-pvpe-server');
}

export default function Tibiascape86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-pvpe-server" />;
}
