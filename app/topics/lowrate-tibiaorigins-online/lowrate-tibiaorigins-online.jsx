import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-online');
}

export default function LowrateTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-online" />;
}
