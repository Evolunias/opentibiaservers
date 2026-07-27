import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-high-exp-server');
}

export default function Coxaot13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-high-exp-server" />;
}
