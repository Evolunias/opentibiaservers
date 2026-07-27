import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-quests');
}

export default function NoxiousotQuestsKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-quests" />;
}
