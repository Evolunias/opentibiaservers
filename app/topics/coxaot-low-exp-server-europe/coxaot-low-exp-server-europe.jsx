import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-europe');
}

export default function CoxaotLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-europe" />;
}
