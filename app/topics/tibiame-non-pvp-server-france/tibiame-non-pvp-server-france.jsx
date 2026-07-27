import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-france');
}

export default function TibiameNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-france" />;
}
