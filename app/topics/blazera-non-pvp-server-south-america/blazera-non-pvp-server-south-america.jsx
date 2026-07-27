import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-south-america');
}

export default function BlazeraNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-south-america" />;
}
