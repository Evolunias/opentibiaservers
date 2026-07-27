import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-france');
}

export default function CoxaotHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-france" />;
}
