import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-pvp-enforced-server');
}

export default function Tibijka15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-pvp-enforced-server" />;
}
