import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-pvp-server');
}

export default function Tibiaorigins15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-pvp-server" />;
}
