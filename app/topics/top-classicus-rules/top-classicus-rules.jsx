import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-rules');
}

export default function TopClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-rules" />;
}
