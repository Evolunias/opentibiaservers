import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-france');
}

export default function TibiamePvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-france" />;
}
