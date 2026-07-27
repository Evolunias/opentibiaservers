import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-quests');
}

export default function ThorniaQuestsKeywordPage() {
  return <StaticKeywordPage slug="thornia-quests" />;
}
