import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-brazil');
}

export default function OriginaltibiaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-brazil" />;
}
