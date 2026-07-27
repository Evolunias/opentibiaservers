import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-rules');
}

export default function FreshStartAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-rules" />;
}
