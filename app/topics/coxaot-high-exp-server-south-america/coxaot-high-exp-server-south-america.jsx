import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-south-america');
}

export default function CoxaotHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-south-america" />;
}
