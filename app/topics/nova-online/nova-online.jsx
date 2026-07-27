import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-online');
}

export default function NovaOnlineKeywordPage() {
  return <StaticKeywordPage slug="nova-online" />;
}
