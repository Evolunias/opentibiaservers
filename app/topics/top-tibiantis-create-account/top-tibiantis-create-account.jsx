import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-create-account');
}

export default function TopTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-create-account" />;
}
