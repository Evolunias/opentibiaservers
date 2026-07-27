import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-france');
}

export default function KasteriaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-france" />;
}
