import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-online');
}

export default function CurrentTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-online" />;
}
