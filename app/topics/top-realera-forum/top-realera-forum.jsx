import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-forum');
}

export default function TopRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="top-realera-forum" />;
}
