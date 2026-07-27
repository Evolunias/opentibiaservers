import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-low-exp-server');
}

export default function Coxaot76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-low-exp-server" />;
}
