import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-rules');
}

export default function ClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-rules" />;
}
