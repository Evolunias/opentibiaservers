import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-ots');
}

export default function BestZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-ots" />;
}
