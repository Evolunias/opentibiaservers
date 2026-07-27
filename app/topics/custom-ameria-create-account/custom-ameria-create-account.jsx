import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-create-account');
}

export default function CustomAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-create-account" />;
}
