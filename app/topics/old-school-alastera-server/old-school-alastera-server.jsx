import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-server');
}

export default function OldSchoolAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-server" />;
}
