import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-zezenia-online-server');
}

export default function EvoZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="evo-zezenia-online-server" />;
}
