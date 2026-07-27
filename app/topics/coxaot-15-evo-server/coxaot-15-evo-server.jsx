import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-evo-server');
}

export default function Coxaot15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-evo-server" />;
}
