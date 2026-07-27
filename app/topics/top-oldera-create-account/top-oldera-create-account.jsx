import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-create-account');
}

export default function TopOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-create-account" />;
}
