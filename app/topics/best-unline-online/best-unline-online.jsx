import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-online');
}

export default function BestUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-unline-online" />;
}
