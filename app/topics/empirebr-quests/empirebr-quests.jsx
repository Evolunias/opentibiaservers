import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-quests');
}

export default function EmpirebrQuestsKeywordPage() {
  return <StaticKeywordPage slug="empirebr-quests" />;
}
