import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-create-account');
}

export default function OldSchoolTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-create-account" />;
}
