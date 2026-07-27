import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-online');
}

export default function ActiveZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-online" />;
}
