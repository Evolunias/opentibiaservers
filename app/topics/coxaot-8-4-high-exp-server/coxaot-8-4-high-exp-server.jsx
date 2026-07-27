import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-high-exp-server');
}

export default function Coxaot84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-high-exp-server" />;
}
