import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-canada');
}

export default function CustomMapForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-canada" />;
}
