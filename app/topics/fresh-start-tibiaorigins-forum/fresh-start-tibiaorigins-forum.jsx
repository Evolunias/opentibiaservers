import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-forum');
}

export default function FreshStartTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-forum" />;
}
