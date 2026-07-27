import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-pvp-enforced-server');
}

export default function Tibiaorigins12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-pvp-enforced-server" />;
}
