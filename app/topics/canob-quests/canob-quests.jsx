import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-quests');
}

export default function CanobQuestsKeywordPage() {
  return <StaticKeywordPage slug="canob-quests" />;
}
