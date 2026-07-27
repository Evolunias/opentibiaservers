import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-baiak-server');
}

export default function Oxygenot15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-baiak-server" />;
}
