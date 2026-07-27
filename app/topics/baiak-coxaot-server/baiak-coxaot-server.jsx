import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-coxaot-server');
}

export default function BaiakCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-coxaot-server" />;
}
