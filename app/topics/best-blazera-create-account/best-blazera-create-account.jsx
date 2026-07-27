import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-create-account');
}

export default function BestBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-create-account" />;
}
