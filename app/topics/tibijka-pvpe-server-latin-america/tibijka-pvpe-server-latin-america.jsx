import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-latin-america');
}

export default function TibijkaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-latin-america" />;
}
