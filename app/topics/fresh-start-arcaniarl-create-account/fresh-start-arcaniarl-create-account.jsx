import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-create-account');
}

export default function FreshStartArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-create-account" />;
}
