import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-zezenia-online-server');
}

export default function PvpZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-zezenia-online-server" />;
}
