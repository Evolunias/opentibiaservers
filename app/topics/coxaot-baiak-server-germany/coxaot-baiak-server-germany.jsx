import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-germany');
}

export default function CoxaotBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-germany" />;
}
