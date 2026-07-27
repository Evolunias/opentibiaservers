import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-create-account');
}

export default function ActiveOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-create-account" />;
}
