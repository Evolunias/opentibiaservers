import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-forum');
}

export default function FreshStartTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-forum" />;
}
