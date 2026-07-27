import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-ot');
}

export default function BestTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-ot" />;
}
