import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-pvp-enforced-server');
}

export default function Tibijka12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-pvp-enforced-server" />;
}
