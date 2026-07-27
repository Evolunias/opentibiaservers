import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-non-pvp-server');
}

export default function Tibiaorigins100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-non-pvp-server" />;
}
