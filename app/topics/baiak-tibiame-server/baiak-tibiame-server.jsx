import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibiame-server');
}

export default function BaiakTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibiame-server" />;
}
