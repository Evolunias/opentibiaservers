import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-low-exp-server');
}

export default function Coxaot84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-low-exp-server" />;
}
