import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-rules');
}

export default function PopularTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-rules" />;
}
