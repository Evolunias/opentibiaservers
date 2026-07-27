import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-create-account');
}

export default function RuthlessChaosCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-create-account" />;
}
