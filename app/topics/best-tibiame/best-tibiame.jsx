import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame');
}

export default function BestTibiameKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame" />;
}
