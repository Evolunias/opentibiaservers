import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-north-america');
}

export default function TibijkaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-north-america" />;
}
