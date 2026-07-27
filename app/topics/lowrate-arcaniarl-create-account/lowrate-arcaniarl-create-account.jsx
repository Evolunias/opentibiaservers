import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-create-account');
}

export default function LowrateArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-create-account" />;
}
