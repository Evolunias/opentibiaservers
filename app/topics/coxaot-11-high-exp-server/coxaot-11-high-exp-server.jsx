import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-high-exp-server');
}

export default function Coxaot11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-high-exp-server" />;
}
