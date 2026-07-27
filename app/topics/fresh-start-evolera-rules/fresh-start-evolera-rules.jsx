import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-rules');
}

export default function FreshStartEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-rules" />;
}
