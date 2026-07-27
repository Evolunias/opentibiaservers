import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-low-exp-server');
}

export default function Coxaot15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-low-exp-server" />;
}
