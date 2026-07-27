import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-online');
}

export default function ActiveNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-online" />;
}
