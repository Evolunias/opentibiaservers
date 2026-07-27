import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-pvp-enforced-server');
}

export default function Tibiascape100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-pvp-enforced-server" />;
}
