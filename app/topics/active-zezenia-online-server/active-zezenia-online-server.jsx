import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-server');
}

export default function ActiveZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-server" />;
}
