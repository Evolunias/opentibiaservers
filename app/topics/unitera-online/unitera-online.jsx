import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-online');
}

export default function UniteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="unitera-online" />;
}
