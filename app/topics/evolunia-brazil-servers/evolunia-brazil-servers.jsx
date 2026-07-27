import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-brazil-servers');
}

export default function EvoluniaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-brazil-servers" />;
}
