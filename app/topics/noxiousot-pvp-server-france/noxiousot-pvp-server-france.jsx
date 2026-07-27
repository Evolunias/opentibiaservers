import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-france');
}

export default function NoxiousotPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-france" />;
}
