import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-forum');
}

export default function OfficialTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-forum" />;
}
