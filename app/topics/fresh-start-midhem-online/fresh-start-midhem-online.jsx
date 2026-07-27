import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-online');
}

export default function FreshStartMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-online" />;
}
