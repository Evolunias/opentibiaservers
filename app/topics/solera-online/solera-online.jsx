import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-online');
}

export default function SoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="solera-online" />;
}
