import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-baiak-server');
}

export default function Coxaot96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-baiak-server" />;
}
