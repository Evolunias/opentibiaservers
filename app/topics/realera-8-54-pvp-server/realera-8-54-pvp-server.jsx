import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-54-pvp-server');
}

export default function Realera854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-54-pvp-server" />;
}
