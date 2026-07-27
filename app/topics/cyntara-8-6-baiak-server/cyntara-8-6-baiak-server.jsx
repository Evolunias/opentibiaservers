import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-6-baiak-server');
}

export default function Cyntara86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-6-baiak-server" />;
}
