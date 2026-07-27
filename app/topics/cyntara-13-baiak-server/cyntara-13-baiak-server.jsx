import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-baiak-server');
}

export default function Cyntara13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-baiak-server" />;
}
