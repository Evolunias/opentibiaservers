import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-6-pvp-server');
}

export default function Realera86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-6-pvp-server" />;
}
