import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-rules');
}

export default function TopClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-rules" />;
}
