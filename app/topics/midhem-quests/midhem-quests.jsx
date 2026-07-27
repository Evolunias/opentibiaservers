import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-quests');
}

export default function MidhemQuestsKeywordPage() {
  return <StaticKeywordPage slug="midhem-quests" />;
}
