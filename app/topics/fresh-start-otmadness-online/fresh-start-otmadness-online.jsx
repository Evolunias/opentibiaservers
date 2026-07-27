import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-online');
}

export default function FreshStartOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-online" />;
}
