import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-create-account');
}

export default function OldSchoolMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-create-account" />;
}
