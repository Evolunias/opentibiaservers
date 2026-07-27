import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-ot');
}

export default function LowrateZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-ot" />;
}
