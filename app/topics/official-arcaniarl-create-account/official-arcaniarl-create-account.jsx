import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-create-account');
}

export default function OfficialArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-create-account" />;
}
