import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-evo-server');
}

export default function Coxaot1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-evo-server" />;
}
