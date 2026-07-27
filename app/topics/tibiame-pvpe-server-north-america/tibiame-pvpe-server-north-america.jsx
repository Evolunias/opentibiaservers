import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-north-america');
}

export default function TibiamePvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-north-america" />;
}
