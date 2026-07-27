import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-france');
}

export default function TibiaraNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-france" />;
}
