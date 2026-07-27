import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-argentina');
}

export default function CoxaotBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-argentina" />;
}
