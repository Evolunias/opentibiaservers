import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-online');
}

export default function HighrateTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-online" />;
}
