import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-online');
}

export default function BestZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-online" />;
}
