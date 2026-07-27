import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-create-account');
}

export default function PopularRuthlessChaosCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-create-account" />;
}
