import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-quests');
}

export default function ImperianicQuestsKeywordPage() {
  return <StaticKeywordPage slug="imperianic-quests" />;
}
