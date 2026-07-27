import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-create-account');
}

export default function BestElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-create-account" />;
}
