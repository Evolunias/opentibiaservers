import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-pvp-enforced-server');
}

export default function Tibiascape12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-pvp-enforced-server" />;
}
