import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-no-reset-server');
}

export default function Marolaot76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-no-reset-server" />;
}
