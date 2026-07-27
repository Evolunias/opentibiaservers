import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-online');
}

export default function EvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="evolera-online" />;
}
