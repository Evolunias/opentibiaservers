import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-ot-server');
}

export default function BestTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-ot-server" />;
}
