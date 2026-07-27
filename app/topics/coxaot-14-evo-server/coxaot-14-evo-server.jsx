import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-evo-server');
}

export default function Coxaot14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-evo-server" />;
}
