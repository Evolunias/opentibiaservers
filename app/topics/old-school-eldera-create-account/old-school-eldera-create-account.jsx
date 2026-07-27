import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-create-account');
}

export default function OldSchoolElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-create-account" />;
}
