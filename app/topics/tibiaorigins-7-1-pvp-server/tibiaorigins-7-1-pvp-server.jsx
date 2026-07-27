import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-pvp-server');
}

export default function Tibiaorigins71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-pvp-server" />;
}
