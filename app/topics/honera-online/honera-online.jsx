import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-online');
}

export default function HoneraOnlineKeywordPage() {
  return <StaticKeywordPage slug="honera-online" />;
}
