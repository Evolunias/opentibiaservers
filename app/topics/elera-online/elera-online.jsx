import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-online');
}

export default function EleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="elera-online" />;
}
