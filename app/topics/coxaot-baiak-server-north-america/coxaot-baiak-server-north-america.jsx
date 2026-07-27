import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-north-america');
}

export default function CoxaotBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-north-america" />;
}
