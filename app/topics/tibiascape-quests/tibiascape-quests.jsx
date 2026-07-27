import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-quests');
}

export default function TibiascapeQuestsKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-quests" />;
}
