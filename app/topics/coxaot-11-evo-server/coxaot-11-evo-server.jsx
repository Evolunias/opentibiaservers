import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-evo-server');
}

export default function Coxaot11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-evo-server" />;
}
