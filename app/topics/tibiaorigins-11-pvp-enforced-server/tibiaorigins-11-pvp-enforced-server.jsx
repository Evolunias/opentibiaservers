import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-pvp-enforced-server');
}

export default function Tibiaorigins11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-pvp-enforced-server" />;
}
