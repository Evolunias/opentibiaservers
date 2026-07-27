import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-baiak-server');
}

export default function Oxygenot14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-baiak-server" />;
}
