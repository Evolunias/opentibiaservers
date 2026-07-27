import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-forum');
}

export default function HighrateArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-forum" />;
}
