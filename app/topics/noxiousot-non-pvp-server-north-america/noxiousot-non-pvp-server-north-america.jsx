import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-north-america');
}

export default function NoxiousotNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-north-america" />;
}
