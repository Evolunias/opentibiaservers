import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-brazil');
}

export default function TibijkaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-brazil" />;
}
