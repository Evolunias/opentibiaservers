import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-rules');
}

export default function ActiveZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-rules" />;
}
