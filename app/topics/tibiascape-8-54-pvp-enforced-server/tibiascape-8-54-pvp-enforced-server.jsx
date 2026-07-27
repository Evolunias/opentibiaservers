import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-54-pvp-enforced-server');
}

export default function Tibiascape854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-54-pvp-enforced-server" />;
}
