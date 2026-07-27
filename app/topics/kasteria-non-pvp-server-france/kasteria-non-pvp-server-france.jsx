import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-france');
}

export default function KasteriaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-france" />;
}
