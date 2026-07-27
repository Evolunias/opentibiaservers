import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-rules');
}

export default function NewAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-rules" />;
}
