import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online');
}

export default function TopZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online" />;
}
