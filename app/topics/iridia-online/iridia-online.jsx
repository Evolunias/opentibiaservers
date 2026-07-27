import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-online');
}

export default function IridiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="iridia-online" />;
}
