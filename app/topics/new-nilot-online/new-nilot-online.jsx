import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-online');
}

export default function NewNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-online" />;
}
