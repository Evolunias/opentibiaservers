import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-server');
}

export default function BestTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-server" />;
}
