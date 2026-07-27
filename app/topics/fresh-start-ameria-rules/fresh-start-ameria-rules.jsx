import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-rules');
}

export default function FreshStartAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-rules" />;
}
