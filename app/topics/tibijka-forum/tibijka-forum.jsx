import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-forum');
}

export default function TibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="tibijka-forum" />;
}
