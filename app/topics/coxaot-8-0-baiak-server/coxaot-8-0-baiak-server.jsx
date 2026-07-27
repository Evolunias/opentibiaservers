import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-baiak-server');
}

export default function Coxaot80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-baiak-server" />;
}
