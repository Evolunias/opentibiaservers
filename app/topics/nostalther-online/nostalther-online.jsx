import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-online');
}

export default function NostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="nostalther-online" />;
}
