import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-official');
}

export default function HighrateRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-official" />;
}
