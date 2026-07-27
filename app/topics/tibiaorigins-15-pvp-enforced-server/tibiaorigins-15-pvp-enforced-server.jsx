import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-pvp-enforced-server');
}

export default function Tibiaorigins15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-pvp-enforced-server" />;
}
