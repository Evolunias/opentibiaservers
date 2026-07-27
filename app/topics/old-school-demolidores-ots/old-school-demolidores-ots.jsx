import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-ots');
}

export default function OldSchoolDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-ots" />;
}
