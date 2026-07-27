import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-low-exp-server');
}

export default function Coxaot14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-low-exp-server" />;
}
