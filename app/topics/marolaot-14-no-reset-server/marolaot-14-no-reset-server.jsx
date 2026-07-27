import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-no-reset-server');
}

export default function Marolaot14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-no-reset-server" />;
}
