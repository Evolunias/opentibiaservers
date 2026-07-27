import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani');
}

export default function OldSchoolRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani" />;
}
