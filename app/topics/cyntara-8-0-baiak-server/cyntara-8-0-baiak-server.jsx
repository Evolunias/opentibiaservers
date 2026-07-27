import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-baiak-server');
}

export default function Cyntara80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-baiak-server" />;
}
