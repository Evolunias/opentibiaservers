import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-no-reset-server');
}

export default function Marolaot12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-no-reset-server" />;
}
