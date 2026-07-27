import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-online');
}

export default function CurrentOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-online" />;
}
