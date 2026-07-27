import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-forum');
}

export default function CustomTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-forum" />;
}
