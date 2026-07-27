import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-ots');
}

export default function CustomZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-ots" />;
}
