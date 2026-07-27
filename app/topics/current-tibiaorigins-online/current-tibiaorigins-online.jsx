import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-online');
}

export default function CurrentTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-online" />;
}
