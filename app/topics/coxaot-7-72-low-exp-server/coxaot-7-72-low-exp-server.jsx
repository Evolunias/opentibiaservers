import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-72-low-exp-server');
}

export default function Coxaot772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-72-low-exp-server" />;
}
