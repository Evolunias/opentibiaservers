import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-forum');
}

export default function CurrentTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-forum" />;
}
