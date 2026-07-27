import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-ot');
}

export default function CurrentZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-ot" />;
}
