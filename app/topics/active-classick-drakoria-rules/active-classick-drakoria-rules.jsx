import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-rules');
}

export default function ActiveClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-rules" />;
}
