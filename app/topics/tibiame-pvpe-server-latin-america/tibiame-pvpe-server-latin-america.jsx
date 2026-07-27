import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-latin-america');
}

export default function TibiamePvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-latin-america" />;
}
