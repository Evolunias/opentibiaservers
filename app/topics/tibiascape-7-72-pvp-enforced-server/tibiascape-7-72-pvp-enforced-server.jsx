import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-72-pvp-enforced-server');
}

export default function Tibiascape772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-72-pvp-enforced-server" />;
}
