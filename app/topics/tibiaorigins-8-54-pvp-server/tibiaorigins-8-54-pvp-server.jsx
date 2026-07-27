import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-54-pvp-server');
}

export default function Tibiaorigins854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-54-pvp-server" />;
}
