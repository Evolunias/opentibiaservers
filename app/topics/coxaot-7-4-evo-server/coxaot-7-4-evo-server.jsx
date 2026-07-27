import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-4-evo-server');
}

export default function Coxaot74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-4-evo-server" />;
}
