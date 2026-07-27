import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-create-account');
}

export default function OldSchoolLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-create-account" />;
}
