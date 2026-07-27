import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-france');
}

export default function TibiamePvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-france" />;
}
