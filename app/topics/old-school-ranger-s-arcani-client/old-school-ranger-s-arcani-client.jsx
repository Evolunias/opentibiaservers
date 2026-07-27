import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-client');
}

export default function OldSchoolRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-client" />;
}
