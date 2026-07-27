import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibiaorigins-server');
}

export default function PvpEnforcedTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibiaorigins-server" />;
}
