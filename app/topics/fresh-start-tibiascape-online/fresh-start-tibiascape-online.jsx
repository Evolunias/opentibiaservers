import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-online');
}

export default function FreshStartTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-online" />;
}
