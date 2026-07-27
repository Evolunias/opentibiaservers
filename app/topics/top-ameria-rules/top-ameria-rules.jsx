import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-rules');
}

export default function TopAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-rules" />;
}
