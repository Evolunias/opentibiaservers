import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-quests');
}

export default function TibiaretroQuestsKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-quests" />;
}
