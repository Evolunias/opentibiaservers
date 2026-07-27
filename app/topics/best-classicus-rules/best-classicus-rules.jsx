import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-rules');
}

export default function BestClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-rules" />;
}
