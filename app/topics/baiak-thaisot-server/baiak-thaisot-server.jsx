import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-thaisot-server');
}

export default function BaiakThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-thaisot-server" />;
}
