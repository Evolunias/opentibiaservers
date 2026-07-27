import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-forum');
}

export default function HighrateCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-forum" />;
}
