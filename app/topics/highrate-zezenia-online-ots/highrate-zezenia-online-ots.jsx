import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-ots');
}

export default function HighrateZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-ots" />;
}
