import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-germany');
}

export default function BlazeraNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-germany" />;
}
