import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-online');
}

export default function ActiveTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-online" />;
}
