import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-quests');
}

export default function TibiaraQuestsKeywordPage() {
  return <StaticKeywordPage slug="tibiara-quests" />;
}
