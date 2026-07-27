import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-login');
}

export default function OldSchoolDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-login" />;
}
