import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-rules');
}

export default function OldSchoolAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-rules" />;
}
