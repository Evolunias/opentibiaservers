import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-online');
}

export default function NoResetEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-online" />;
}
