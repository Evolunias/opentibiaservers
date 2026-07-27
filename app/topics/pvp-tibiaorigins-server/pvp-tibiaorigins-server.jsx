import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibiaorigins-server');
}

export default function PvpTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibiaorigins-server" />;
}
