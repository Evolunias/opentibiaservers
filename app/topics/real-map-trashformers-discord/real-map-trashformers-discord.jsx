import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-discord');
}

export default function RealMapTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-discord" />;
}
