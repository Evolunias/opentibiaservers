import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-pvp-server');
}

export default function Tibiaorigins14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-pvp-server" />;
}
