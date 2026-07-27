import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-quests');
}

export default function OxygenotQuestsKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-quests" />;
}
