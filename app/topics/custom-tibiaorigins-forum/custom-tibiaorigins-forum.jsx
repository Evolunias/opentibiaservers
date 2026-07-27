import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-forum');
}

export default function CustomTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-forum" />;
}
