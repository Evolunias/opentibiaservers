import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-ot-server');
}

export default function PopularZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-ot-server" />;
}
