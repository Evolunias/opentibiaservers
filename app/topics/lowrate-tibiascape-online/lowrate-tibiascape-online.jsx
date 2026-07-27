import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-online');
}

export default function LowrateTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-online" />;
}
