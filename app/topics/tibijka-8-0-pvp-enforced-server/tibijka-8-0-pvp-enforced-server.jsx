import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-0-pvp-enforced-server');
}

export default function Tibijka80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-0-pvp-enforced-server" />;
}
