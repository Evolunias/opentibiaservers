import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-forum');
}

export default function FreshStartTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-forum" />;
}
