import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-54-evo-server');
}

export default function Coxaot854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-54-evo-server" />;
}
