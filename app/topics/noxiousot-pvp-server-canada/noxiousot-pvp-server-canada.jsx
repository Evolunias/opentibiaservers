import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-canada');
}

export default function NoxiousotPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-canada" />;
}
