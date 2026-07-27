import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-9-6-pvp-enforced-server');
}

export default function Tibiaorigins96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-9-6-pvp-enforced-server" />;
}
