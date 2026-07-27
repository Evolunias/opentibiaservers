import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-create-account');
}

export default function TopBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-create-account" />;
}
