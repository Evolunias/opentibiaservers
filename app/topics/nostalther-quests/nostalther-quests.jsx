import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-quests');
}

export default function NostaltherQuestsKeywordPage() {
  return <StaticKeywordPage slug="nostalther-quests" />;
}
