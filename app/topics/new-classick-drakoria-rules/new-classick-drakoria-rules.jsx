import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-rules');
}

export default function NewClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-rules" />;
}
