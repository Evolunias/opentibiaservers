import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-usa');
}

export default function CustomMapForumUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-usa" />;
}
