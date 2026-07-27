import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-forum');
}

export default function FreshStartZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-forum" />;
}
