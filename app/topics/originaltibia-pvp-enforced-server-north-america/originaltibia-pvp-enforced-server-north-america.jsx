import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-north-america');
}

export default function OriginaltibiaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-north-america" />;
}
