import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-low-exp-server');
}

export default function Coxaot13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-low-exp-server" />;
}
