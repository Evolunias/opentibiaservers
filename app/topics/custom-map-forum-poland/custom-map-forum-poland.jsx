import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-poland');
}

export default function CustomMapForumPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-poland" />;
}
