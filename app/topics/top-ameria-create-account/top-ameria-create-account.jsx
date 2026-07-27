import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-create-account');
}

export default function TopAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-create-account" />;
}
