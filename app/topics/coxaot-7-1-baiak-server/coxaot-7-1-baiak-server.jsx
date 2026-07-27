import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-1-baiak-server');
}

export default function Coxaot71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-1-baiak-server" />;
}
