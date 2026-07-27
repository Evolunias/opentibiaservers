import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-create-account');
}

export default function ActiveArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-create-account" />;
}
