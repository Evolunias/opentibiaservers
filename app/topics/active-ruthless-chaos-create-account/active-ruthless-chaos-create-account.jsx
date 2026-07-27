import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-create-account');
}

export default function ActiveRuthlessChaosCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-create-account" />;
}
