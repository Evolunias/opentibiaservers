import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-create-account');
}

export default function CurrentArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-create-account" />;
}
