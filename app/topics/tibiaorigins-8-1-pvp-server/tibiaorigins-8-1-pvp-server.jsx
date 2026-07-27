import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-pvp-server');
}

export default function Tibiaorigins81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-pvp-server" />;
}
