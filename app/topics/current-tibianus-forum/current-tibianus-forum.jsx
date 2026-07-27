import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-forum');
}

export default function CurrentTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-forum" />;
}
