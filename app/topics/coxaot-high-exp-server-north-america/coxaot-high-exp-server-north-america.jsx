import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-north-america');
}

export default function CoxaotHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-north-america" />;
}
