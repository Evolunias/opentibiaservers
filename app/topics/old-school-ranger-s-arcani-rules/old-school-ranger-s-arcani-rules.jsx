import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-rules');
}

export default function OldSchoolRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-rules" />;
}
