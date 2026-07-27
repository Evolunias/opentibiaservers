import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-forum');
}

export default function HighrateTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-forum" />;
}
