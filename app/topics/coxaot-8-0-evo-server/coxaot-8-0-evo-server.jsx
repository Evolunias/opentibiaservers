import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-evo-server');
}

export default function Coxaot80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-evo-server" />;
}
