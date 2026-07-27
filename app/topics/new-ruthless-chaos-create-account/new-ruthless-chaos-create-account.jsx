import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-create-account');
}

export default function NewRuthlessChaosCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-create-account" />;
}
