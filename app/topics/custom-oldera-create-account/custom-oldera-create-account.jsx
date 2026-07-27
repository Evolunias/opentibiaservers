import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-create-account');
}

export default function CustomOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-create-account" />;
}
