import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-baiak-server');
}

export default function Cyntara71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-baiak-server" />;
}
