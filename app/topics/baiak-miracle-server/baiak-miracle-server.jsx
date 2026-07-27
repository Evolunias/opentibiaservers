import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-miracle-server');
}

export default function BaiakMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-miracle-server" />;
}
