import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-brazil-servers');
}

export default function KasteriaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-brazil-servers" />;
}
