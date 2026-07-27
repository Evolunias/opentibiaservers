import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-online');
}

export default function CustomCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-online" />;
}
