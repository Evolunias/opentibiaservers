import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-create-account');
}

export default function OldSchoolDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-create-account" />;
}
