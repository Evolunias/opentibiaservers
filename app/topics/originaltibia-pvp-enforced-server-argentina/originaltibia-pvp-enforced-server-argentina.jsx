import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-argentina');
}

export default function OriginaltibiaPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-argentina" />;
}
