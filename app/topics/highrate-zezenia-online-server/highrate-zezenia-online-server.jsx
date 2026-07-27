import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-server');
}

export default function HighrateZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-server" />;
}
