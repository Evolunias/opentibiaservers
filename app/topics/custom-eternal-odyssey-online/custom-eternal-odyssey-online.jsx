import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-online');
}

export default function CustomEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-online" />;
}
