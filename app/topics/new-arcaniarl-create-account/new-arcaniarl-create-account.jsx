import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-create-account');
}

export default function NewArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-create-account" />;
}
