import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-create-account');
}

export default function CurrentRuthlessChaosCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-create-account" />;
}
