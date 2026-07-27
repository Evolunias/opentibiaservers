import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-pvp-enforced-server');
}

export default function Tibijka86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-pvp-enforced-server" />;
}
