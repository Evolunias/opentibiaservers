import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-rules');
}

export default function NewUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="new-unline-rules" />;
}
