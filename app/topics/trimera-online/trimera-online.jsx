import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-online');
}

export default function TrimeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="trimera-online" />;
}
