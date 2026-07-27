import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-south-america');
}

export default function CustomMapForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-south-america" />;
}
