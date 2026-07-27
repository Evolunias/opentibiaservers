import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-baiak-server');
}

export default function Cyntara84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-baiak-server" />;
}
