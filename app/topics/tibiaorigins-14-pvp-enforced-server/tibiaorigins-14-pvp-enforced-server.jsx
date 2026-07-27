import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-pvp-enforced-server');
}

export default function Tibiaorigins14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-pvp-enforced-server" />;
}
