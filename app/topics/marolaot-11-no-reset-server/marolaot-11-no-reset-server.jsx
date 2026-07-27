import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-no-reset-server');
}

export default function Marolaot11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-no-reset-server" />;
}
