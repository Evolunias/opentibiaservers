import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-ot-server');
}

export default function OldSchoolAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-ot-server" />;
}
