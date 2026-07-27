import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-private-server');
}

export default function CustomZezeniaOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-private-server" />;
}
