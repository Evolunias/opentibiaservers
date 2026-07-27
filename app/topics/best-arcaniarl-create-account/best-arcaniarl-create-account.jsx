import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-create-account');
}

export default function BestArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-create-account" />;
}
