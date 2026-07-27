import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-non-pvp-server');
}

export default function Tibiaorigins13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-non-pvp-server" />;
}
