import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-quests');
}

export default function TibiaoriginsQuestsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-quests" />;
}
