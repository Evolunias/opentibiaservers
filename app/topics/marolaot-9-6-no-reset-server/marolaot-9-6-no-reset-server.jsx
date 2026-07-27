import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-9-6-no-reset-server');
}

export default function Marolaot96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-9-6-no-reset-server" />;
}
