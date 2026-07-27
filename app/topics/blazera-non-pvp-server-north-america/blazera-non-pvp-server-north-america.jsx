import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-north-america');
}

export default function BlazeraNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-north-america" />;
}
