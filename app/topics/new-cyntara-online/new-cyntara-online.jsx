import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-online');
}

export default function NewCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-online" />;
}
