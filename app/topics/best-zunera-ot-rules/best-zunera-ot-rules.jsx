import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-rules');
}

export default function BestZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-rules" />;
}
