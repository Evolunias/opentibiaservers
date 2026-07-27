import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-forum');
}

export default function NewTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-forum" />;
}
