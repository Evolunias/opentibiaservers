import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-online');
}

export default function BestThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-online" />;
}
