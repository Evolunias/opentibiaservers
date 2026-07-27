import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-rules');
}

export default function FreshStartUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-rules" />;
}
