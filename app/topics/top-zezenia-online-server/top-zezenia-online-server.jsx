import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-server');
}

export default function TopZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-server" />;
}
