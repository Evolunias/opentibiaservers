import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-create-account');
}

export default function HighrateBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-create-account" />;
}
