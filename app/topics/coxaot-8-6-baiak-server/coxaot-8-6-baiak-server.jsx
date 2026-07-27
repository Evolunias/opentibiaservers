import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-baiak-server');
}

export default function Coxaot86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-baiak-server" />;
}
