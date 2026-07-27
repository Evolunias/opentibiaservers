import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-europe');
}

export default function CoxaotHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-europe" />;
}
