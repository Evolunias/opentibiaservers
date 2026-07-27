import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-online');
}

export default function ActiveRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-realera-online" />;
}
