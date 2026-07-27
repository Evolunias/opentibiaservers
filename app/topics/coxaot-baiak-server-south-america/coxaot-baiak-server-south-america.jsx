import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-south-america');
}

export default function CoxaotBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-south-america" />;
}
