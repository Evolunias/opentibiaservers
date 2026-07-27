import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-ots');
}

export default function CurrentZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-ots" />;
}
