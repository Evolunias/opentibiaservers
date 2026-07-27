import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-france');
}

export default function CoxaotLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-france" />;
}
