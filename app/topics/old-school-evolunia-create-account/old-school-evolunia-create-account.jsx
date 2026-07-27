import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-create-account');
}

export default function OldSchoolEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-create-account" />;
}
