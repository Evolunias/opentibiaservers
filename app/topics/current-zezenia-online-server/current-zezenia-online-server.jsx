import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-server');
}

export default function CurrentZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-server" />;
}
