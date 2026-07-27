import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-forum');
}

export default function TibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-forum" />;
}
