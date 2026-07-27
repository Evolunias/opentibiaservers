import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-online');
}

export default function ActiveCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-online" />;
}
