import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-rules');
}

export default function CurrentAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-rules" />;
}
