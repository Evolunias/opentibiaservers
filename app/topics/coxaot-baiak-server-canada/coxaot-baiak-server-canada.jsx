import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-canada');
}

export default function CoxaotBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-canada" />;
}
