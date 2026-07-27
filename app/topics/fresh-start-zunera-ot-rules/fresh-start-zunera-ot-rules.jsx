import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-rules');
}

export default function FreshStartZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-rules" />;
}
