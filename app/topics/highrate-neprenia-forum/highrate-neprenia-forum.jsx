import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-forum');
}

export default function HighrateNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-forum" />;
}
