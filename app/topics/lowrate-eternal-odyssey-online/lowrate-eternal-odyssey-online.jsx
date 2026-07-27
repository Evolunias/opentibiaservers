import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-online');
}

export default function LowrateEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-online" />;
}
