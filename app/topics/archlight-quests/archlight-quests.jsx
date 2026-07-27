import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-quests');
}

export default function ArchlightQuestsKeywordPage() {
  return <StaticKeywordPage slug="archlight-quests" />;
}
