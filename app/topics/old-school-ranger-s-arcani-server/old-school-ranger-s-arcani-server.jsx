import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-server');
}

export default function OldSchoolRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-server" />;
}
