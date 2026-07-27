import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-forum');
}

export default function NewTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-forum" />;
}
