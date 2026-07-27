import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-online');
}

export default function NewRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-realera-online" />;
}
