import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-online');
}

export default function ForteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="fortera-online" />;
}
