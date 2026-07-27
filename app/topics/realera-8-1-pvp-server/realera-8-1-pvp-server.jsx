import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-pvp-server');
}

export default function Realera81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-pvp-server" />;
}
