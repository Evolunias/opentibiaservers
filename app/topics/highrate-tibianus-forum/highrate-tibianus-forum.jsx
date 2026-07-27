import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-forum');
}

export default function HighrateTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-forum" />;
}
