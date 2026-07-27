import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-create-account');
}

export default function OfficialEternalOdysseyCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-create-account" />;
}
