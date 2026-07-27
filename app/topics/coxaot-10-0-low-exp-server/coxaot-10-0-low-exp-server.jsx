import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-low-exp-server');
}

export default function Coxaot100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-low-exp-server" />;
}
