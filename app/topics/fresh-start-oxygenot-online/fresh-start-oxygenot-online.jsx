import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-online');
}

export default function FreshStartOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-online" />;
}
