import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-north-america');
}

export default function KasteriaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-north-america" />;
}
