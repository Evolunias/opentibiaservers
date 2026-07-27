import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-quests');
}

export default function TibianusQuestsKeywordPage() {
  return <StaticKeywordPage slug="tibianus-quests" />;
}
