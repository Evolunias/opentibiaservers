import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-quests');
}

export default function MarolaotQuestsKeywordPage() {
  return <StaticKeywordPage slug="marolaot-quests" />;
}
