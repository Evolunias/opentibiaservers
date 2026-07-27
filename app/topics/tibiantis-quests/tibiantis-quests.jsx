import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-quests');
}

export default function TibiantisQuestsKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-quests" />;
}
