import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-zezenia-online-server');
}

export default function BaiakZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-zezenia-online-server" />;
}
