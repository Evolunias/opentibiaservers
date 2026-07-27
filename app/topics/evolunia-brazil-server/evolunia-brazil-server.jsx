import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-brazil-server');
}

export default function EvoluniaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-brazil-server" />;
}
