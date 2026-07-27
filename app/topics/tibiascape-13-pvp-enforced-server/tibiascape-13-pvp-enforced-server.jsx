import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-pvp-enforced-server');
}

export default function Tibiascape13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-pvp-enforced-server" />;
}
