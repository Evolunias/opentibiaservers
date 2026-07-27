import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-non-pvp-server');
}

export default function Tibiaorigins11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-non-pvp-server" />;
}
