import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-forum');
}

export default function LowrateTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-forum" />;
}
