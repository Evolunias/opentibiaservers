import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-private-server');
}

export default function NewZezeniaOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-private-server" />;
}
