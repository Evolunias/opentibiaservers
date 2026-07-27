import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-ots');
}

export default function TopZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-ots" />;
}
