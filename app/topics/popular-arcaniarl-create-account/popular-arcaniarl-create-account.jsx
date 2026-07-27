import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-create-account');
}

export default function PopularArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-create-account" />;
}
