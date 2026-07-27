import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-72-non-pvp-server');
}

export default function Tibiaorigins772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-72-non-pvp-server" />;
}
