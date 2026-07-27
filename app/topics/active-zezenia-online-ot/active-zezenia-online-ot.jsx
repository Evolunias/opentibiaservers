import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-ot');
}

export default function ActiveZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-ot" />;
}
