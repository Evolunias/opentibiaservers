import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-server');
}

export default function CustomZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-server" />;
}
