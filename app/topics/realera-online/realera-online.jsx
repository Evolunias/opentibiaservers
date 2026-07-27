import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-online');
}

export default function RealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="realera-online" />;
}
