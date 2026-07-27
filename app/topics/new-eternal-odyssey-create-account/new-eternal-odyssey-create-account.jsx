import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-create-account');
}

export default function NewEternalOdysseyCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-create-account" />;
}
