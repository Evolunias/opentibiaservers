import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-ot-server');
}

export default function HighrateZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-ot-server" />;
}
