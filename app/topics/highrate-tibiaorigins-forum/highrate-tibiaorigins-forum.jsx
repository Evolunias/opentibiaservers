import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-forum');
}

export default function HighrateTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-forum" />;
}
