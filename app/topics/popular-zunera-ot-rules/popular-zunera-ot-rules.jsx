import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-rules');
}

export default function PopularZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-rules" />;
}
