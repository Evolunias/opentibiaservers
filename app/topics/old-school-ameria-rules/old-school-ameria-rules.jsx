import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-rules');
}

export default function OldSchoolAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-rules" />;
}
