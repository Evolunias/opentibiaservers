import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-rules');
}

export default function BestClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-rules" />;
}
