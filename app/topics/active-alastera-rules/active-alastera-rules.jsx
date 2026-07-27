import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-rules');
}

export default function ActiveAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-rules" />;
}
