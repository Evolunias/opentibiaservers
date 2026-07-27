import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-client');
}

export default function OldSchoolAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-client" />;
}
