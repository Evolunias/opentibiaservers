import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-evo-server');
}

export default function Coxaot100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-evo-server" />;
}
