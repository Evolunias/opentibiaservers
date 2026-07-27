import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-online');
}

export default function CurrentThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-online" />;
}
