import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-quests');
}

export default function TibiameQuestsKeywordPage() {
  return <StaticKeywordPage slug="tibiame-quests" />;
}
