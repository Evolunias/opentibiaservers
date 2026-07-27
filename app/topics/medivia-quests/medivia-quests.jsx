import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-quests');
}

export default function MediviaQuestsKeywordPage() {
  return <StaticKeywordPage slug="medivia-quests" />;
}
