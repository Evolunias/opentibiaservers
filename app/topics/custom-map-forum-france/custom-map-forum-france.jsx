import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-forum-france');
}

export default function CustomMapForumFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-forum-france" />;
}
