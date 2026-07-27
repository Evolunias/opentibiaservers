import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-online');
}

export default function TopEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-online" />;
}
