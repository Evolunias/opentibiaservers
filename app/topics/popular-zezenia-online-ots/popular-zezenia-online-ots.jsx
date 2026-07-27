import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-ots');
}

export default function PopularZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-ots" />;
}
