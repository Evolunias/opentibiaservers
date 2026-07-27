import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-online');
}

export default function BlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="blazera-online" />;
}
