import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-forum');
}

export default function PopularImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-forum" />;
}
