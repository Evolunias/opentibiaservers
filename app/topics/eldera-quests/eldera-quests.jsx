import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-quests');
}

export default function ElderaQuestsKeywordPage() {
  return <StaticKeywordPage slug="eldera-quests" />;
}
