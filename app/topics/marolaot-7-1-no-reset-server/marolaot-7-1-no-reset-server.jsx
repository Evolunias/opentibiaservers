import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-1-no-reset-server');
}

export default function Marolaot71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-1-no-reset-server" />;
}
