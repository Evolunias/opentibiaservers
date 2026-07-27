import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-quests');
}

export default function RookgaardTalesQuestsKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-quests" />;
}
