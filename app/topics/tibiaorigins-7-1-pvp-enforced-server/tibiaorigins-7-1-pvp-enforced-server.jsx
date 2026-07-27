import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-pvp-enforced-server');
}

export default function Tibiaorigins71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-pvp-enforced-server" />;
}
