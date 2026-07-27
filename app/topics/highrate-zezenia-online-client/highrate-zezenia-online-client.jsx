import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-client');
}

export default function HighrateZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-client" />;
}
