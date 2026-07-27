import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-online');
}

export default function BestNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-online" />;
}
