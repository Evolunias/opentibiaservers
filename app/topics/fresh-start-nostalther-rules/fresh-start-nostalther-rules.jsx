import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-rules');
}

export default function FreshStartNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-rules" />;
}
