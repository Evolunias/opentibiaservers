import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-zezenia-online-server');
}

export default function PvpeZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-zezenia-online-server" />;
}
