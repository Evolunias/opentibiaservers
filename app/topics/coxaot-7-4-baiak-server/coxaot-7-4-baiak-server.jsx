import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-4-baiak-server');
}

export default function Coxaot74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-4-baiak-server" />;
}
