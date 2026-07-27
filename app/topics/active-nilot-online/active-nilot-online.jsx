import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-online');
}

export default function ActiveNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-online" />;
}
