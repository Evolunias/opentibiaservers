import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-online');
}

export default function ActiveThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-online" />;
}
