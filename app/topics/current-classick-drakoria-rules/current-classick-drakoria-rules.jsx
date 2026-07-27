import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-rules');
}

export default function CurrentClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-rules" />;
}
