import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-uk');
}

export default function CustomMapForumUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-uk" />;
}
