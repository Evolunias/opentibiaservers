import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-pvp-server');
}

export default function Tibiaorigins13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-pvp-server" />;
}
