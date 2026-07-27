import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-online');
}

export default function FreshStartEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-online" />;
}
