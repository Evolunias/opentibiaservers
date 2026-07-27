import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-pvp-enforced-server');
}

export default function Tibijka71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-pvp-enforced-server" />;
}
