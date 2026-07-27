import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-high-exp-server');
}

export default function Coxaot12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-high-exp-server" />;
}
