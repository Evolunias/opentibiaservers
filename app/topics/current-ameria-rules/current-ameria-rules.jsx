import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-rules');
}

export default function CurrentAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-rules" />;
}
