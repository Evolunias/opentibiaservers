import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-online');
}

export default function NewTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-online" />;
}
