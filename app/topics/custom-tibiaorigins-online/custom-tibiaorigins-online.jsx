import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-online');
}

export default function CustomTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-online" />;
}
