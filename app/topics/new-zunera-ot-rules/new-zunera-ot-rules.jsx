import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-rules');
}

export default function NewZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-rules" />;
}
