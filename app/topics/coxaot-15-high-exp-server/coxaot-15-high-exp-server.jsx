import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-high-exp-server');
}

export default function Coxaot15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-high-exp-server" />;
}
