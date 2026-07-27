import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-create-account');
}

export default function TopElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-create-account" />;
}
