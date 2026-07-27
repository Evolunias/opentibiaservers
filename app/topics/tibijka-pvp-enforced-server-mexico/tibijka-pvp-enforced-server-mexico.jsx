import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-mexico');
}

export default function TibijkaPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-mexico" />;
}
