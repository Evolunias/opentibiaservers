import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-north-america');
}

export default function AlasteraNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-north-america" />;
}
