import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-europe');
}

export default function OriginaltibiaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-europe" />;
}
