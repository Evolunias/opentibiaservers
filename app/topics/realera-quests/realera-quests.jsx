import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-quests');
}

export default function RealeraQuestsKeywordPage() {
  return <StaticKeywordPage slug="realera-quests" />;
}
