import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-rules');
}

export default function NewClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-rules" />;
}
