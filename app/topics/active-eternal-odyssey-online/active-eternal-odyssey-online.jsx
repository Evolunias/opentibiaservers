import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-online');
}

export default function ActiveEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-online" />;
}
