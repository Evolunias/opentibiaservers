import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-high-exp-server');
}

export default function Coxaot86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-high-exp-server" />;
}
