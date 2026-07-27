import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-online');
}

export default function OtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="otmadness-online" />;
}
