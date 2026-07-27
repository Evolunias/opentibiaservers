import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-zezenia-online-server');
}

export default function NonPvpZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-zezenia-online-server" />;
}
