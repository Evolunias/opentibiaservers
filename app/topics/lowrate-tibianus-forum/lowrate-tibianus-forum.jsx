import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-forum');
}

export default function LowrateTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-forum" />;
}
