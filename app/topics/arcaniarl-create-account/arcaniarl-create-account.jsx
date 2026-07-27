import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-create-account');
}

export default function ArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-create-account" />;
}
