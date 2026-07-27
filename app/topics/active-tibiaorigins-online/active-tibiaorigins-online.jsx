import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-online');
}

export default function ActiveTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-online" />;
}
