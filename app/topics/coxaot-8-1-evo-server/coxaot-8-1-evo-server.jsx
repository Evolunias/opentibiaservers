import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-evo-server');
}

export default function Coxaot81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-evo-server" />;
}
