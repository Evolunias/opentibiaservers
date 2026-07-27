import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-online');
}

export default function CurrentZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-online" />;
}
