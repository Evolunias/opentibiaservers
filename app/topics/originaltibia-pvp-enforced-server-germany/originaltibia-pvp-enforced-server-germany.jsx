import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-germany');
}

export default function OriginaltibiaPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-germany" />;
}
