import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-low-exp-server');
}

export default function Coxaot11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-low-exp-server" />;
}
