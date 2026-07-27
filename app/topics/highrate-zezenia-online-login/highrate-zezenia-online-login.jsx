import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-login');
}

export default function HighrateZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-login" />;
}
