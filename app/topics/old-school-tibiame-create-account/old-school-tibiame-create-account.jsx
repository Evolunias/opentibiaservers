import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-create-account');
}

export default function OldSchoolTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-create-account" />;
}
