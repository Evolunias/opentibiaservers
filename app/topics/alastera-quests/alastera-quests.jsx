import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-quests');
}

export default function AlasteraQuestsKeywordPage() {
  return <StaticKeywordPage slug="alastera-quests" />;
}
