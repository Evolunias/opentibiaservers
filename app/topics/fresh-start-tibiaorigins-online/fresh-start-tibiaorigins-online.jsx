import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-online');
}

export default function FreshStartTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-online" />;
}
