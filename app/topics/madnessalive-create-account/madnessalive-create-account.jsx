import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-create-account');
}

export default function MadnessaliveCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-create-account" />;
}
