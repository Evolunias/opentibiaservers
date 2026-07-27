import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-rules');
}

export default function PopularAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-rules" />;
}
