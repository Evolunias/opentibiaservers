import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-create-account');
}

export default function TopRuthlessChaosCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-create-account" />;
}
