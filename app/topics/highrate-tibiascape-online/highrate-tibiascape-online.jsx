import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-online');
}

export default function HighrateTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-online" />;
}
