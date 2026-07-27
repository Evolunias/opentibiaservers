import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-low-exp-server');
}

export default function Coxaot80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-low-exp-server" />;
}
