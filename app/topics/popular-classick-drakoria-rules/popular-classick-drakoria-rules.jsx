import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-rules');
}

export default function PopularClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-rules" />;
}
