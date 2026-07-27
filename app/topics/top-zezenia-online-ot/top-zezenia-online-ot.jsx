import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-ot');
}

export default function TopZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-ot" />;
}
