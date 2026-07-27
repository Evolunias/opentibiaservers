import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-uk');
}

export default function OriginaltibiaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-uk" />;
}
