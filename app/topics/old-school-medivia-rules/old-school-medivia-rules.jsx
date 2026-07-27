import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-rules');
}

export default function OldSchoolMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-rules" />;
}
