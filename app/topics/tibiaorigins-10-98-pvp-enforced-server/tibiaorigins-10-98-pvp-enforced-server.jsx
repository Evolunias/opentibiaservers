import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-98-pvp-enforced-server');
}

export default function Tibiaorigins1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-98-pvp-enforced-server" />;
}
