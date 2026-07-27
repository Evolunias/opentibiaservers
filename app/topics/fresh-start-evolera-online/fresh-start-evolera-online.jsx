import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-online');
}

export default function FreshStartEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-online" />;
}
