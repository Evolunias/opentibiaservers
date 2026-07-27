import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-online');
}

export default function HighrateTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-online" />;
}
