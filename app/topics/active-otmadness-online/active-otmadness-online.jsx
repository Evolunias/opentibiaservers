import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-online');
}

export default function ActiveOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-online" />;
}
