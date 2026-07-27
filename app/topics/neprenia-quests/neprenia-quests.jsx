import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-quests');
}

export default function NepreniaQuestsKeywordPage() {
  return <StaticKeywordPage slug="neprenia-quests" />;
}
