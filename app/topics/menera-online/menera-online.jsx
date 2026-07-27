import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-online');
}

export default function MeneraOnlineKeywordPage() {
  return <StaticKeywordPage slug="menera-online" />;
}
