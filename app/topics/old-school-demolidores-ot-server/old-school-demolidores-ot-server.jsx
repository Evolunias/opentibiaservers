import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-ot-server');
}

export default function OldSchoolDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-ot-server" />;
}
