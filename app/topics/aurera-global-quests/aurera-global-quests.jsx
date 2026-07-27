import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-quests');
}

export default function AureraGlobalQuestsKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-quests" />;
}
