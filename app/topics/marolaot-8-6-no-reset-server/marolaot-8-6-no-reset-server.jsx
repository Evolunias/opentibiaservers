import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-6-no-reset-server');
}

export default function Marolaot86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-6-no-reset-server" />;
}
