import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-quests');
}

export default function MiracleQuestsKeywordPage() {
  return <StaticKeywordPage slug="miracle-quests" />;
}
