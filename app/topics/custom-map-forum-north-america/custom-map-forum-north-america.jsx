import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-north-america');
}

export default function CustomMapForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-north-america" />;
}
