import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-create-account');
}

export default function FreshStartAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-create-account" />;
}
