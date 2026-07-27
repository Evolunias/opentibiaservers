import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-online');
}

export default function CustomNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-online" />;
}
