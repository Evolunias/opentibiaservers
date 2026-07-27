import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-pvp-enforced-server');
}

export default function Tibiascape76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-pvp-enforced-server" />;
}
