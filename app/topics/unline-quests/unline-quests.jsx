import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-quests');
}

export default function UnlineQuestsKeywordPage() {
  return <StaticKeywordPage slug="unline-quests" />;
}
