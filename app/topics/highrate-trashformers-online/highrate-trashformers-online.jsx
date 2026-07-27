import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-online');
}

export default function HighrateTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-online" />;
}
