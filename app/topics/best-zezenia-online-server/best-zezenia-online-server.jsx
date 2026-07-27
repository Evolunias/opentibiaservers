import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-server');
}

export default function BestZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-server" />;
}
