import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-official');
}

export default function HighrateArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-official" />;
}
