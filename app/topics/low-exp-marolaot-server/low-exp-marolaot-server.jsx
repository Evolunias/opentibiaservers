import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-marolaot-server');
}

export default function LowExpMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-marolaot-server" />;
}
