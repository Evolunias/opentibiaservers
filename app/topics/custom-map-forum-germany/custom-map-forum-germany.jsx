import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-germany');
}

export default function CustomMapForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-germany" />;
}
