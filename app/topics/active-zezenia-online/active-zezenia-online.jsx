import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online');
}

export default function ActiveZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online" />;
}
