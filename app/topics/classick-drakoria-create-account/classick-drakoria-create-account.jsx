import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-create-account');
}

export default function ClassickDrakoriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-create-account" />;
}
