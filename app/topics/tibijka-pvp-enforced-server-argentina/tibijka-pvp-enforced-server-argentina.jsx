import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-argentina');
}

export default function TibijkaPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-argentina" />;
}
