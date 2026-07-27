import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-create-account');
}

export default function ActiveTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-create-account" />;
}
