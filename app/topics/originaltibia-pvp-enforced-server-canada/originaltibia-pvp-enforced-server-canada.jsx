import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-canada');
}

export default function OriginaltibiaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-canada" />;
}
