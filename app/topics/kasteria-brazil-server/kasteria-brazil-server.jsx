import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-brazil-server');
}

export default function KasteriaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-brazil-server" />;
}
