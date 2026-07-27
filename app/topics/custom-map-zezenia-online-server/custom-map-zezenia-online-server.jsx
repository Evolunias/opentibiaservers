import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-zezenia-online-server');
}

export default function CustomMapZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-zezenia-online-server" />;
}
