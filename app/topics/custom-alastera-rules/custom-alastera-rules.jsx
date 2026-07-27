import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-rules');
}

export default function CustomAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-rules" />;
}
