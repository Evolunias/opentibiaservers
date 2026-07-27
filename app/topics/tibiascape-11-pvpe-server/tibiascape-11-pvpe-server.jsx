import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-pvpe-server');
}

export default function Tibiascape11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-pvpe-server" />;
}
