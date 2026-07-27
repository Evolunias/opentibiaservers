import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-online');
}

export default function TopMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-online" />;
}
