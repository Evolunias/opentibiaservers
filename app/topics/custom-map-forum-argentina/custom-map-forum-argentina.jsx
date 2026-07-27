import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-argentina');
}

export default function CustomMapForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-argentina" />;
}
