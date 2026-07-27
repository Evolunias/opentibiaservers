import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-create-account');
}

export default function OfficialMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-create-account" />;
}
