import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-create-account');
}

export default function CurrentAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-create-account" />;
}
