import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-canada');
}

export default function BlazeraNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-canada" />;
}
