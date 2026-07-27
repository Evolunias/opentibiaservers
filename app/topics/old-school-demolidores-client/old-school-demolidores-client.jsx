import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-client');
}

export default function OldSchoolDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-client" />;
}
