import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-baiak-server');
}

export default function Coxaot76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-baiak-server" />;
}
