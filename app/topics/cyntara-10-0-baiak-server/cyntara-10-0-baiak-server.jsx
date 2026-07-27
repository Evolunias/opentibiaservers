import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-baiak-server');
}

export default function Cyntara100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-baiak-server" />;
}
