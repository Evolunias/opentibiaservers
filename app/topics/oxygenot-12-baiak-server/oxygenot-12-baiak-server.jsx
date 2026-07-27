import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-baiak-server');
}

export default function Oxygenot12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-baiak-server" />;
}
