import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-create-account');
}

export default function ActiveEternalOdysseyCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-create-account" />;
}
