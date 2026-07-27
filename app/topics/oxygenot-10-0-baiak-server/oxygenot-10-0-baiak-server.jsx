import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-baiak-server');
}

export default function Oxygenot100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-baiak-server" />;
}
