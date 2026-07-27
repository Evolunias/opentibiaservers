import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-france');
}

export default function NoxiousotNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-france" />;
}
