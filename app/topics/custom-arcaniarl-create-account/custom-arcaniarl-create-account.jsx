import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-create-account');
}

export default function CustomArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-create-account" />;
}
