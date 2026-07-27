import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-quests');
}

export default function DemolidoresQuestsKeywordPage() {
  return <StaticKeywordPage slug="demolidores-quests" />;
}
