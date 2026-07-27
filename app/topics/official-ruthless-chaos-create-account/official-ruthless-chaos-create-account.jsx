import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-create-account');
}

export default function OfficialRuthlessChaosCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-create-account" />;
}
