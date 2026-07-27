import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-create-account');
}

export default function OldSchoolNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-create-account" />;
}
