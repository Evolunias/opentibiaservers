import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-register');
}

export default function HighrateZezeniaOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-register" />;
}
