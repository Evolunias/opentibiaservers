import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-quests');
}

export default function TibijkaQuestsKeywordPage() {
  return <StaticKeywordPage slug="tibijka-quests" />;
}
