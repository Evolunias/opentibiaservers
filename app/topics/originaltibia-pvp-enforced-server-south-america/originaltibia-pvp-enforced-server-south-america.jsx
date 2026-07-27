import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-south-america');
}

export default function OriginaltibiaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-south-america" />;
}
