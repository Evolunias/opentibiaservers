import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-zezenia-online-servers');
}

export default function EvoZezeniaOnlineServersKeywordPage() {
  return <StaticKeywordPage slug="evo-zezenia-online-servers" />;
}
