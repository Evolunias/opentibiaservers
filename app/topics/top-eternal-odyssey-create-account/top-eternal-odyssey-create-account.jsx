import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-create-account');
}

export default function TopEternalOdysseyCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-create-account" />;
}
