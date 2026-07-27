import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-create-account');
}

export default function TopArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-create-account" />;
}
