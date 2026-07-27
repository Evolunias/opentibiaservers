import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-online');
}

export default function TopZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-online" />;
}
