import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-north-america');
}

export default function NoxiousotPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-north-america" />;
}
