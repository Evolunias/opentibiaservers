import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-poland');
}

export default function CoxaotBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-poland" />;
}
