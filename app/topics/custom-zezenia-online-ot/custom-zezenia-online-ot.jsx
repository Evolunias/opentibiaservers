import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-ot');
}

export default function CustomZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-ot" />;
}
