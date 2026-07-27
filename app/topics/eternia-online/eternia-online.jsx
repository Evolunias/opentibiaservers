import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-online');
}

export default function EterniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="eternia-online" />;
}
