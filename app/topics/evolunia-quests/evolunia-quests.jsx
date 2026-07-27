import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-quests');
}

export default function EvoluniaQuestsKeywordPage() {
  return <StaticKeywordPage slug="evolunia-quests" />;
}
