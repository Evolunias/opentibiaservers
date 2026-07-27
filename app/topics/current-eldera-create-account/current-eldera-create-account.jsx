import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-create-account');
}

export default function CurrentElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-create-account" />;
}
