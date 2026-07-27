import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-baiak-server');
}

export default function Coxaot81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-baiak-server" />;
}
