import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-south-america');
}

export default function BlazeraPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-south-america" />;
}
