import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-forum');
}

export default function ActiveTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-forum" />;
}
