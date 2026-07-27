import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-quests');
}

export default function DuraOnlineQuestsKeywordPage() {
  return <StaticKeywordPage slug="dura-online-quests" />;
}
