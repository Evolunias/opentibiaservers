import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-rules');
}

export default function ActiveAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-rules" />;
}
