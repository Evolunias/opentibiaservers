import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-high-exp-server');
}

export default function Coxaot14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-high-exp-server" />;
}
