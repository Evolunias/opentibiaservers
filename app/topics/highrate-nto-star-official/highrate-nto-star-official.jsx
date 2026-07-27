import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-official');
}

export default function HighrateNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-official" />;
}
