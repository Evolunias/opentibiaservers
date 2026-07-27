import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-canada');
}

export default function NoxiousotNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-canada" />;
}
