import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-pvp-enforced-server');
}

export default function Tibiascape15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-pvp-enforced-server" />;
}
