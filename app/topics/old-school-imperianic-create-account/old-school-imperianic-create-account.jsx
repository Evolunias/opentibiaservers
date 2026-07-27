import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-create-account');
}

export default function OldSchoolImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-create-account" />;
}
