import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-north-america');
}

export default function TibijkaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-north-america" />;
}
