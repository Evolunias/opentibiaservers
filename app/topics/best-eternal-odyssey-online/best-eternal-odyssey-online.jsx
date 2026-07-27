import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-online');
}

export default function BestEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-online" />;
}
