import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-create-account');
}

export default function CurrentEternalOdysseyCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-create-account" />;
}
