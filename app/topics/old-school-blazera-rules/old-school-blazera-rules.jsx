import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-rules');
}

export default function OldSchoolBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-rules" />;
}
