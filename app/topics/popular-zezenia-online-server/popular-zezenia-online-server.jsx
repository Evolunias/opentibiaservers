import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-server');
}

export default function PopularZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-server" />;
}
