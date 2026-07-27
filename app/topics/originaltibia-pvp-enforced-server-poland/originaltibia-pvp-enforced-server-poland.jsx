import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-poland');
}

export default function OriginaltibiaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-poland" />;
}
