import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-online');
}

export default function CustomNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-online" />;
}
