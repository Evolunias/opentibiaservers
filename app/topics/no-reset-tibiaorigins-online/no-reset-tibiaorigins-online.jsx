import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-online');
}

export default function NoResetTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-online" />;
}
