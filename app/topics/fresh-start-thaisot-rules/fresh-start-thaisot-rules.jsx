import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-rules');
}

export default function FreshStartThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-rules" />;
}
