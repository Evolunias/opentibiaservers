import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-create-account');
}

export default function NewAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-create-account" />;
}
