import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-72-evo-server');
}

export default function Coxaot772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-72-evo-server" />;
}
