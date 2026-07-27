import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-1-no-reset-server');
}

export default function Marolaot81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-1-no-reset-server" />;
}
