import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-ot');
}

export default function HighrateZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-ot" />;
}
