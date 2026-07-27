import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-quests');
}

export default function SerenityQuestsKeywordPage() {
  return <StaticKeywordPage slug="serenity-quests" />;
}
