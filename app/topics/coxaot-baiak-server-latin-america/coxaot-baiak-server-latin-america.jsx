import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-latin-america');
}

export default function CoxaotBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-latin-america" />;
}
