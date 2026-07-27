import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-rules');
}

export default function BestTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-rules" />;
}
