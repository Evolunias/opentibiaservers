import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-latin-america');
}

export default function OlderaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-latin-america" />;
}
