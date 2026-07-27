import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-low-exp-server');
}

export default function Coxaot96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-low-exp-server" />;
}
