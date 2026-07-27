import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-98-non-pvp-server');
}

export default function Tibiaorigins1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-98-non-pvp-server" />;
}
