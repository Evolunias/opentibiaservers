import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-online');
}

export default function TopTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-online" />;
}
