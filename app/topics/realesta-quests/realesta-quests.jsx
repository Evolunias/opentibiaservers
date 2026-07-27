import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-quests');
}

export default function RealestaQuestsKeywordPage() {
  return <StaticKeywordPage slug="realesta-quests" />;
}
