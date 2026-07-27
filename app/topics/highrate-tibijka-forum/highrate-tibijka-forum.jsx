import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-forum');
}

export default function HighrateTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-forum" />;
}
