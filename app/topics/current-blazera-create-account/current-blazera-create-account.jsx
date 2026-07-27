import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-create-account');
}

export default function CurrentBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-create-account" />;
}
