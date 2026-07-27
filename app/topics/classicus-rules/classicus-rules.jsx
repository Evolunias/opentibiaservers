import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-rules');
}

export default function ClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="classicus-rules" />;
}
