import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-private-server');
}

export default function OldSchoolAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-private-server" />;
}
