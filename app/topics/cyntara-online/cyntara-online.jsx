import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-online');
}

export default function CyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="cyntara-online" />;
}
