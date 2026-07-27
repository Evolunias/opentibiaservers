import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-online');
}

export default function FreshStartNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-online" />;
}
