import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-ots');
}

export default function ActiveZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-ots" />;
}
