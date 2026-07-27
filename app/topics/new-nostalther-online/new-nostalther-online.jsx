import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-online');
}

export default function NewNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-online" />;
}
