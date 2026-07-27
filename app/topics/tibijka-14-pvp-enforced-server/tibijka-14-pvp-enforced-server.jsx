import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-pvp-enforced-server');
}

export default function Tibijka14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-pvp-enforced-server" />;
}
