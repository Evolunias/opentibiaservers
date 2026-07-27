import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-pvp-server');
}

export default function Realera12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-pvp-server" />;
}
