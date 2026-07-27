import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-no-reset-server');
}

export default function Marolaot15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-no-reset-server" />;
}
