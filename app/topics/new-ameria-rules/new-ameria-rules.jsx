import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-rules');
}

export default function NewAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-rules" />;
}
