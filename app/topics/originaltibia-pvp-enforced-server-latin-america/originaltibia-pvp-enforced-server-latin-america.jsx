import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-enforced-server-latin-america');
}

export default function OriginaltibiaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-enforced-server-latin-america" />;
}
