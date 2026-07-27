import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-forum');
}

export default function CurrentTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-forum" />;
}
