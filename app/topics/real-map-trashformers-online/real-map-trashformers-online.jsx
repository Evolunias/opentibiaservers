import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-online');
}

export default function RealMapTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-online" />;
}
