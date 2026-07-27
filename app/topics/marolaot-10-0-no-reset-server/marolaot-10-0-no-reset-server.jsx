import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-no-reset-server');
}

export default function Marolaot100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-no-reset-server" />;
}
