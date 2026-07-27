import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-online');
}

export default function TopEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-online" />;
}
