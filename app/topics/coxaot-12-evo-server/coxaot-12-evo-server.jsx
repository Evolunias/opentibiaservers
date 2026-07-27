import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-evo-server');
}

export default function Coxaot12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-evo-server" />;
}
