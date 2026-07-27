import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-create-account');
}

export default function NewMadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-create-account" />;
}
