import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-server');
}

export default function OldSchoolDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-server" />;
}
