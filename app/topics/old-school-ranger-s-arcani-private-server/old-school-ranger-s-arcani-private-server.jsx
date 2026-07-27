import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-private-server');
}

export default function OldSchoolRangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-private-server" />;
}
