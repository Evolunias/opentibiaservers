import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-create-account');
}

export default function CustomRuthlessChaosCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-create-account" />;
}
