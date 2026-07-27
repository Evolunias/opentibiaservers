import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-south-america');
}

export default function BlazeraPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-south-america" />;
}
