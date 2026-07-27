import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-quests');
}

export default function OriginaltibiaQuestsKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-quests" />;
}
