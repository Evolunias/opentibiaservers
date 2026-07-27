import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-quests');
}

export default function InfernalOtQuestsKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-quests" />;
}
