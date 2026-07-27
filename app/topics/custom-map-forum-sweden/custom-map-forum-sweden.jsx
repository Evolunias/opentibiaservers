import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-sweden');
}

export default function CustomMapForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-sweden" />;
}
