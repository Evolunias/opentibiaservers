import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-forum');
}

export default function NoResetTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-forum" />;
}
