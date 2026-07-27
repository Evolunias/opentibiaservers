import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-pvpe-server');
}

export default function Tibijka76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-pvpe-server" />;
}
