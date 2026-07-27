import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-baiak-server');
}

export default function Cyntara81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-baiak-server" />;
}
