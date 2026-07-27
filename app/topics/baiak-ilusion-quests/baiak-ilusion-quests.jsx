import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-quests');
}

export default function BaiakIlusionQuestsKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-quests" />;
}
