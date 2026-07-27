import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-ots');
}

export default function BestTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-ots" />;
}
