import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-forum');
}

export default function HighrateOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-forum" />;
}
