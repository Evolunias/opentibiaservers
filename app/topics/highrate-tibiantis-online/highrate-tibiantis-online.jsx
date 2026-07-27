import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-online');
}

export default function HighrateTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-online" />;
}
