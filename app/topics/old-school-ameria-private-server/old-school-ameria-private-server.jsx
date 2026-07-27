import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-private-server');
}

export default function OldSchoolAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-private-server" />;
}
