import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-quests');
}

export default function CyntaraQuestsKeywordPage() {
  return <StaticKeywordPage slug="cyntara-quests" />;
}
