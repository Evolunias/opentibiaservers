import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-quests');
}

export default function OlderaQuestsKeywordPage() {
  return <StaticKeywordPage slug="oldera-quests" />;
}
