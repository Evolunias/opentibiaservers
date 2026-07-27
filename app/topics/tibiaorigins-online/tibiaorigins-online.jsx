import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-online');
}

export default function TibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-online" />;
}
