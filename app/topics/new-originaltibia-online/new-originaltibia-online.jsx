import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-online');
}

export default function NewOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-online" />;
}
