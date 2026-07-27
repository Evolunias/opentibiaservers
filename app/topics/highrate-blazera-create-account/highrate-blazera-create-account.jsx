import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-create-account');
}

export default function HighrateBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-create-account" />;
}
