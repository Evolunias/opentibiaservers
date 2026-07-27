import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-pvp-enforced-server');
}

export default function Tibiascape14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-pvp-enforced-server" />;
}
