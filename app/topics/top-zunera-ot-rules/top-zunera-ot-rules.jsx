import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-rules');
}

export default function TopZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-rules" />;
}
