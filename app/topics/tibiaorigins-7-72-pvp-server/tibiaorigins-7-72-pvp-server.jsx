import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-72-pvp-server');
}

export default function Tibiaorigins772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-72-pvp-server" />;
}
