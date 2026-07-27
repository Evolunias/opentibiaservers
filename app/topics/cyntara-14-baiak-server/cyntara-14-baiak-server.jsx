import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-baiak-server');
}

export default function Cyntara14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-baiak-server" />;
}
