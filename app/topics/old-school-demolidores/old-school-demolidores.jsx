import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores');
}

export default function OldSchoolDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores" />;
}
