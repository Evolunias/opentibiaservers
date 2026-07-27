import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online');
}

export default function CustomZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online" />;
}
