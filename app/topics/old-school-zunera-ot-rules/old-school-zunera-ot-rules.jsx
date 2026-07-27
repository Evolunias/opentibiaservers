import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-rules');
}

export default function OldSchoolZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-rules" />;
}
