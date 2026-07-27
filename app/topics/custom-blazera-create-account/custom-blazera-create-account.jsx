import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-create-account');
}

export default function CustomBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-create-account" />;
}
