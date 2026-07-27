import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-online');
}

export default function NewOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-online" />;
}
