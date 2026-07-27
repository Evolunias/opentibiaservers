import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-mexico');
}

export default function CustomMapForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-mexico" />;
}
