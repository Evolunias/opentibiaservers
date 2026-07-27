import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-rules');
}

export default function FreshStartRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-rules" />;
}
