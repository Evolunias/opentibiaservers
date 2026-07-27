import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-evo-server');
}

export default function Coxaot84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-evo-server" />;
}
