import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-non-pvp-server');
}

export default function Realera12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-non-pvp-server" />;
}
