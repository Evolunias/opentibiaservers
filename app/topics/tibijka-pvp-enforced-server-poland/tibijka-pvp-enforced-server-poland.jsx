import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-poland');
}

export default function TibijkaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-poland" />;
}
