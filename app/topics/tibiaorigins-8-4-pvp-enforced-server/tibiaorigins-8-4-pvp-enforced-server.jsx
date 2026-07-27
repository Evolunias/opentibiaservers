import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-pvp-enforced-server');
}

export default function Tibiaorigins84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-pvp-enforced-server" />;
}
