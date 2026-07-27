import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-online');
}

export default function FreshStartThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-online" />;
}
