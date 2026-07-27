import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-carlinot-server');
}

export default function BaiakCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-carlinot-server" />;
}
