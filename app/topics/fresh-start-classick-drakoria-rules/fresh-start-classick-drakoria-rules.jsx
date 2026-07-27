import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-rules');
}

export default function FreshStartClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-rules" />;
}
