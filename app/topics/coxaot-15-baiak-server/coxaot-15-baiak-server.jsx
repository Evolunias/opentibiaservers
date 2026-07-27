import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-baiak-server');
}

export default function Coxaot15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-baiak-server" />;
}
