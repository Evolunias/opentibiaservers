import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-rules');
}

export default function CustomAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-rules" />;
}
