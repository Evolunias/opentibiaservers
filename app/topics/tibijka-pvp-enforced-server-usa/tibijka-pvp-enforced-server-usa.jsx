import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-usa');
}

export default function TibijkaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-usa" />;
}
