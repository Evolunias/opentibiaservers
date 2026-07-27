import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-pvp-enforced-server');
}

export default function Tibiascape11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-pvp-enforced-server" />;
}
