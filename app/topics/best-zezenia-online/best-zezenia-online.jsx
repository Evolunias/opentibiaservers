import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online');
}

export default function BestZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online" />;
}
