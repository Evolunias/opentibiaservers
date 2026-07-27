import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-evo-server');
}

export default function Coxaot96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-evo-server" />;
}
