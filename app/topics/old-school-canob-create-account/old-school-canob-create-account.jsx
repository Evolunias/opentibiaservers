import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-create-account');
}

export default function OldSchoolCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-create-account" />;
}
