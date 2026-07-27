import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-create-account');
}

export default function ActiveBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-create-account" />;
}
