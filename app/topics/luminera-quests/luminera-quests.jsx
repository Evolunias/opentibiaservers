import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-quests');
}

export default function LumineraQuestsKeywordPage() {
  return <StaticKeywordPage slug="luminera-quests" />;
}
