import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-non-pvp-server');
}

export default function Tibiaorigins12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-non-pvp-server" />;
}
