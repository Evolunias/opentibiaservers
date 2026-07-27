import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-create-account');
}

export default function OldSchoolArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-create-account" />;
}
