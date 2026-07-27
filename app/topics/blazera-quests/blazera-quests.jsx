import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-quests');
}

export default function BlazeraQuestsKeywordPage() {
  return <StaticKeywordPage slug="blazera-quests" />;
}
