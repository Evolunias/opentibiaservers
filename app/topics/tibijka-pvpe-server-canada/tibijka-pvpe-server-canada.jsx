import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-canada');
}

export default function TibijkaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-canada" />;
}
