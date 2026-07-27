import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-marolaot-server');
}

export default function HighExpMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-marolaot-server" />;
}
