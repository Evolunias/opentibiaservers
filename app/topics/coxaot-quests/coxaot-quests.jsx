import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-quests');
}

export default function CoxaotQuestsKeywordPage() {
  return <StaticKeywordPage slug="coxaot-quests" />;
}
