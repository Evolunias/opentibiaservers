import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-rules');
}

export default function PopularTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-rules" />;
}
