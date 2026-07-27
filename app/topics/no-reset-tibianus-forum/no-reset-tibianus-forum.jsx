import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-forum');
}

export default function NoResetTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-forum" />;
}
