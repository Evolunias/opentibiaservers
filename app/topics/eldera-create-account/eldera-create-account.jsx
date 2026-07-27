import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-create-account');
}

export default function ElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="eldera-create-account" />;
}
