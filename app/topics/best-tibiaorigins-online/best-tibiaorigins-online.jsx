import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-online');
}

export default function BestTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-online" />;
}
