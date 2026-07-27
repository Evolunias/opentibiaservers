import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-rules');
}

export default function OldSchoolHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-rules" />;
}
