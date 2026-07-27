import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-pvp-enforced-server');
}

export default function Tibiascape81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-pvp-enforced-server" />;
}
