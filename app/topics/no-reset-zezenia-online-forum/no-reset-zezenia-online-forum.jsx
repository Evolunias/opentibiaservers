import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-forum');
}

export default function NoResetZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-forum" />;
}
