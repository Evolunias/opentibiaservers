import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-online');
}

export default function BestMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-online" />;
}
