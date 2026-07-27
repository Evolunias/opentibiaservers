import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-create-account');
}

export default function CustomEternalOdysseyCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-create-account" />;
}
