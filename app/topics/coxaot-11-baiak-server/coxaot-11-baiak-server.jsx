import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-baiak-server');
}

export default function Coxaot11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-baiak-server" />;
}
