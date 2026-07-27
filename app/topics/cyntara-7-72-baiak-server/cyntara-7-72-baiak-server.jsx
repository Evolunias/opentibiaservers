import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-baiak-server');
}

export default function Cyntara772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-baiak-server" />;
}
