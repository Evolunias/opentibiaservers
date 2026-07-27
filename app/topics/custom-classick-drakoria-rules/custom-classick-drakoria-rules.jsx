import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-rules');
}

export default function CustomClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-rules" />;
}
