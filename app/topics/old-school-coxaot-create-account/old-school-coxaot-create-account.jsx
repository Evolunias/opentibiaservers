import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-create-account');
}

export default function OldSchoolCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-create-account" />;
}
