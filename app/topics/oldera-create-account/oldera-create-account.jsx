import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-create-account');
}

export default function OlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="oldera-create-account" />;
}
