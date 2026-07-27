import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-quests');
}

export default function MistOfDeathQuestsKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-quests" />;
}
