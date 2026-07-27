import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-usa');
}

export default function OriginaltibiaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-usa" />;
}
