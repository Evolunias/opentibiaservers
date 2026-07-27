import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-rules');
}

export default function FreshStartRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-rules" />;
}
