import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-latin-america');
}

export default function TibijkaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-latin-america" />;
}
